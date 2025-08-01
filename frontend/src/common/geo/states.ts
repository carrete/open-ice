const stateAbbreviations = {
  Alabama: 'AL',
  Alaska: 'AK',
  Arizona: 'AZ',
  Arkansas: 'AR',
  California: 'CA',
  Colorado: 'CO',
  Connecticut: 'CT',
  Delaware: 'DE',
  Florida: 'FL',
  Georgia: 'GA',
  Hawaii: 'HI',
  Idaho: 'ID',
  Illinois: 'IL',
  Indiana: 'IN',
  Iowa: 'IA',
  Kansas: 'KS',
  Kentucky: 'KY',
  Louisiana: 'LA',
  Maine: 'ME',
  Maryland: 'MD',
  Massachusetts: 'MA',
  Michigan: 'MI',
  Minnesota: 'MN',
  Mississippi: 'MS',
  Missouri: 'MO',
  Montana: 'MT',
  Nebraska: 'NE',
  Nevada: 'NV',
  'New Hampshire': 'NH',
  'New Jersey': 'NJ',
  'New Mexico': 'NM',
  'New York': 'NY',
  'North Carolina': 'NC',
  'North Dakota': 'ND',
  Ohio: 'OH',
  Oklahoma: 'OK',
  Oregon: 'OR',
  Pennsylvania: 'PA',
  'Rhode Island': 'RI',
  'South Carolina': 'SC',
  'South Dakota': 'SD',
  Tennessee: 'TN',
  Texas: 'TX',
  Utah: 'UT',
  Vermont: 'VT',
  Virginia: 'VA',
  Washington: 'WA',
  'West Virginia': 'WV',
  Wisconsin: 'WI',
  Wyoming: 'WY',
  'District of Columbia': 'DC',
  'American Samoa': 'AS',
  Guam: 'GU',
  'Commonwealth of the Northern Mariana Islands': 'MP',
  'Puerto Rico': 'PR',
  'United States Virgin Islands': 'VI',
};

const abbrevToState: Record<string, string> = Object.fromEntries(
  Object.entries(stateAbbreviations).map(([name, abbr]) => [abbr, name]),
);

export function getStateAbbreviation(state: string): string | undefined {
  if (state in stateAbbreviations) {
    return stateAbbreviations[state as keyof typeof stateAbbreviations];
  }
  return undefined;
}

export function getStateName(abbrev: string): string | undefined {
  return abbrevToState[abbrev];
}
