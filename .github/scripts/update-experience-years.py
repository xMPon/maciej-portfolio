#!/usr/bin/env python3
import re
from datetime import date
from pathlib import Path

root = Path(__file__).resolve().parents[2]
index_path = root / 'index.html'
text = index_path.read_text(encoding='utf-8')

start_year = 2023
current_year = date.today().year
experience_years = max(0, current_year - start_year)

pattern = re.compile(r'(<span class="stat-number">)(\d+\+?)(</span>\s*<span class="stat-label" data-translate="stat_years">Years Experience</span>)')
new_block = rf'\g<1>{experience_years}+\g<3>'
updated, count = pattern.subn(new_block, text, count=1)

if count != 1:
    raise SystemExit('Could not find the experience counter block to update.')

index_path.write_text(updated, encoding='utf-8')
print(f'Updated years experience to {experience_years}+')
