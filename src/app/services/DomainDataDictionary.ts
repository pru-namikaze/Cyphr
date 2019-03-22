// [
//   type: string,
//   typeDescription: string,
//   [
//     [
//       CypherOptions: string,
//       CypherDescription: string
//     ]
//   ]
// ]
// [
//   '',
//   ' Description',
//   [
//     [
//       '',
//       ' Description'
//     ],
//   ]
// ],
//
export let DomainDataDictionary: Array<[string, string, Array<[string, string]>]> =
[
  [
    'View',
    'View Description', [
      [
        'Text',
        'Text Description'
      ],
      [
        'Bytes',
        'Bytes Description'
      ]
    ]
  ],
  [
    'Transform',
    'Transform Description', [
      [
        'Text Transform',
        'Text Transform Description'
      ],
      [
        'Numeral System',
        'Numeral System Description'
      ],
      [
        'Bitwise Opertion',
        'Bitwise Opertion Description'
      ]
    ]
  ],
  [
    'Alphabets',
    'AlphabetsDescription', [
      [
        'Morse Code',
        'Morse Code Description'
      ],
      [
        'Spelling Alphabet',
        'Spelling Alphabet Description'
      ]
    ]
  ],
  [
    'Substitution Cipher',
    'Substitution Cipher Description', [
      [
        'Alphabetical Substitution',
        'Alphabetical Substitution Description'
      ],
      [
        'ROT13',
        'ROT13 Description'
      ],
      [
        'Affine Cipher',
        'Affine Cipher Description'
      ],
      [
        'Caesar Cipher',
        'Caesar Cipher Description'
      ],
      [
        'Atbash',
        'Atbash Description'
      ],
      [
        'Vigenère Cipher',
        'Vigenère Cipher Description'
      ],
      [
        'Enigma Machine',
        'Enigma Machin Description'
      ]
    ]
  ],
  [
    'Encoding',
    'Encoding Description', [
      [
        'Base64',
        'Base64 Description'
      ],
      [
        'Ascii85',
        'Ascii85 Description'
      ],
      [
        'URL Encoding',
        'URL Encoding Description'
      ],
      [
        'Unicode Code Points',
        'Unicode Code Points Description'
      ],
      [
        'Integer',
        'Integer Description'
      ]
    ]
  ],
  [
    'Modern Cryptography',
    'Modern Cryptography Description', [
      [
        'Block Cipher',
        'Block Cipher Description'
      ],
      [
        'Hash Function',
        'Hash Function Description'
      ],
      [
        'HMAC',
        'HMAC Description'
      ]
    ]
  ]
];
