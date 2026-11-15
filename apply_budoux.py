"""Insert BudouX phrase boundaries into Japanese text in the static pages.

Run after editing Japanese copy. The generated pages require no BudouX script in
the visitor's browser, so language switching cannot retrigger segmentation.
"""

from argparse import ArgumentParser
from html import escape, unescape
from pathlib import Path
import re

import budoux


ROOT = Path(__file__).resolve().parent
PAGES = ("index.html", "about.html", "stores.html", "reservation.html")
PARSER = budoux.load_default_japanese_parser()
TEXT_NODE = re.compile(r"(?<=>)([^<>]+)(?=<)")
JAPANESE = re.compile(r"[\u3040-\u30ff\u3400-\u9fff]")
HTML_ENTITY = re.compile(r"&(?:#[0-9]+|#x[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]+);")
BREAK = "\u200b"
OWNER_MESSAGE = re.compile(r'(<p class="ceo-message" data-i18n="ceoP1">)(.*?)(</p>)', re.S)
OWNER_PHRASE_TAG = re.compile(r'<span class="ceo-phrase">|</span>')


def wrap_phrase(match: re.Match[str]) -> str:
    text = match.group(1).replace(BREAK, "")
    if not JAPANESE.search(text) or HTML_ENTITY.search(text):
        return text

    phrase = text.strip()
    if len(phrase) < 6:
        return text

    start = len(text) - len(text.lstrip())
    end = len(text.rstrip())
    return text[:start] + BREAK.join(PARSER.parse(phrase)) + text[end:]


def segment_owner_message(match: re.Match[str]) -> str:
    text = unescape(OWNER_PHRASE_TAG.sub("", match[2])).replace(BREAK, "")
    # Keep the word ひと息 together when the model splits it after ひと.
    segmented = BREAK.join(PARSER.parse(text)).replace(f"ひと{BREAK}息", "ひと息")
    phrases = "".join(
        f'<span class="ceo-phrase">{escape(phrase)}</span>'
        for phrase in segmented.split(BREAK)
    )
    return f"{match[1]}{phrases}{match[3]}"


def main() -> None:
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--owner-message", action="store_true", help="Update mobile-only owner message phrases.")
    args = parser.parse_args()

    if args.owner_message:
        path = ROOT / "about.html"
        original = path.read_text(encoding="utf-8")
        updated, count = OWNER_MESSAGE.subn(segment_owner_message, original)
        if count != 1:
            parser.error("Expected one Japanese owner message in about.html.")
        if updated != original:
            path.write_text(updated, encoding="utf-8", newline="")
        print("about.html: updated mobile owner message phrases")
        return

    for name in PAGES:
        path = ROOT / name
        original = path.read_text(encoding="utf-8")
        owner_message = OWNER_MESSAGE.search(original)
        if owner_message:
            start, end = owner_message.span()
            updated = (
                TEXT_NODE.sub(wrap_phrase, original[:start])
                + owner_message[0]
                + TEXT_NODE.sub(wrap_phrase, original[end:])
            )
        else:
            updated = TEXT_NODE.sub(wrap_phrase, original)
        if updated != original:
            path.write_text(updated, encoding="utf-8", newline="")
        print(f"{name}: {updated.count(BREAK)} BudouX breaks")


if __name__ == "__main__":
    main()
