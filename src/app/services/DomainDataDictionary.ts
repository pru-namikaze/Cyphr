// [
//   type: string,
//   typeDescription: string,
//   [
//     [
//       CypherOptions: string,
//       CypherDescription: string,
//       [
//         OptionId: number,
//         OptionName: string,
//         [
//            OptionValue1: string
//         ]
//       ]
//     ]
//   ]
// ]
//
// [
//   '',
//   ' Description',
//   [
//     [
//       '',
//       ' Description',
//       [
//          '',
//          [
//            '',
//            ''
//          ]
//       ],
//       [
//          '',
//          [
//            '',
//            ''
//          ]
//       ]
//     ]
//   ]
// ],
//
export let DomainDataDictionary: Array<[string, string, Array<[string, string, Array<[number, string, Array<string>]>]>]> =
  [
    [
      'View',
      'View Description', [
        [
          'Text',
          'Text Description',
          null
        ],
        [
          'Bytes',
          'Bytes Description',
          [
            [
              0,
              'Format',
              [
                'Hexadecimal',
                'Binary'
              ]
            ],
            [
              1,
              'Group By',
              [
                'Half Byte',
                'Byte',
                '2 Byte',
                '4 Byte'
              ]
            ]
          ]
        ]
      ]
    ],

    [
      'Transform',
      'Transform Description', [
        [
          'Text Transform',
          'Text Transform Description',
          [
            [
              0,
              ' Case',
              [
                'None',
                'Lower Case',
                'Upper Case',
                'Capitilize',
                'Alternating Case',
                'Invert Case'
              ]
            ],
            [
              1,
              'Arrangement',
              [
                'None',
                'Reverse'
              ]
            ]
          ]
        ],
        [
          'Numeral System',
          'Numeral System Description',
          [
            [
              0,
              'Read',
              [
                'Decimal',
                'Binary',
                'Octal',
                'Hexadecimal',
                'Roman Numerals',
              ]
            ],
            [
              1,
              'Convert To',
              [
                'Decimal',
                'Binary',
                'Octal',
                'Hexadecimal',
                'Roman Numerals'
              ]
            ]
          ]
        ],
        [
          'Bitwise Opertion',
          'Bitwise Opertion Description',
          [
            [
              0,
              'Operation',
              [
                'NOT ( ~a ) ',
                'AND ( a & b )',
                'OR ( a | b )',
                'XOR ( a ^ b )',
                'NAND ( ~( a & b ) )',
                'NOR ( ~( a | b ) )',
                'NXOR ( ~( a ^ b ) )'
              ]
            ]
          ]
        ]
      ]
    ],

    [
      'Alphabets',
      'AlphabetsDescription', [
        [
          // TODO: Adding the code for Timming Options
          'Morse Code',
          'Morse Code Description',
          [
            [
              0,
              'Varient',
              [
                'English'
              ]
            ],
            [
              1,
              'Representation',
              [
                'Code',
                'Timming'
              ]
            ],
            [
              2,
              'Short',
              [
                '.'
              ]
            ],
            [
              3,
              'Long',
              [
                '-'
              ]
            ],
            [
              4,
              'Space',
              [
                '/'
              ]
            ]
          ]
        ],
        [
          'Spelling Alphabet',
          'Spelling Alphabet Description',
          [
            [
              0,
              'Alphabet',
              [
                'NATO / ICAO Phonetic Alphabet',
                'Dutch Spelling Alphabet',
                'German Spelling Alphabet',
                'Swedish Armed Forces\' Radio Alphabets'
              ]
            ]
          ]
        ]
      ]
    ],

    [
      'Substitution Cipher',
      'Substitution Cipher Description', [
        [
          'Alphabetical Substitution',
          'Alphabetical Substitution Description',
          [
            [
              0,
              'Plain Text',
              [
                'abcdefghijklmnopqrstuvwxyz'
              ]
            ],
            [
              1,
              'Cipher Text',
              [
                'zyxwvutsrqponmlkjihgfedcba'
              ]
            ],
            [
              2,
              'Case Sensitivity',
              [
                'Yes',
                'No'
              ]
            ],
            [
              3,
              'Foreign characters',
              [
                'Include',
                'Ignore'
              ]
            ]
          ]
        ],
        [
          'ROT13',
          'ROT13 Description',
          [
            [
              0,
              'Variant',
              [
                'ROT5 ( 0 - 9 )',
                'ROT13 ( a - z , A - Z )',
                'ROT18 ( 0 - 9 , a - z , A - Z )',
                'ROT47 ( ! - ~ )'
              ]
            ]
          ]
        ],
        [
          'Affine Cipher',
          'Affine Cipher Description',
          [
            [
              0,
              'Slope / A',
              [
                '1',
                '23'
              ]
            ],
            [
              1,
              'Intercept / B',
              [
                '1',
                '999'
              ]
            ],
            [
              2,
              'Alphabet',
              [
                'abcdefghijklmnopqrstuvwxyz'
              ]
            ],
            [
              3,
              'Case Sensitive',
              [
                'Yes',
                'No'
              ]
            ],
            [
              4,
              'Foreign Characters',
              [
                'Included',
                'Ignore'
              ]
            ]
          ]
        ],
        [
          'Caesar Cipher',
          'Caesar Cipher Description',
          [
            [
              0,
              'Shift',
              [
                '1',
                '23'
              ]
            ],
            [
              1,
              'Alphabet',
              [
                'abcdefghijklmnopqrstuvwxyz'
              ]
            ],
            [
              2,
              'Case Sensitive',
              [
                'Yes',
                'No'
              ]
            ],
            [
              3,
              'Foreign Characters',
              [
                'Include',
                'Ignore'
              ]
            ]
          ]
        ],
        [
          'Atbash',
          'Atbash Description',
          [
            [
              0,
              'Alphabet',
              [
                'Latin Alphabet',
                'Hebrew Alphabet'
              ]
            ]
          ]
        ],
        [
          'Vigenère Cipher',
          'Vigenère Cipher Description',
          [
            [
              0,
              'Variant',
              [
                'Standard',
                'Beaufort Cypher',
                'Varient Beaufort Cypher',
                'Trithemius Cypher'
              ]
            ],
            [
              1,
              'Alphabet',
              [
                'abcdefghijklmnopqrstuvwxyz'
              ]
            ],
            [
              2,
              'Case Sensitive',
              [
                'Yes',
                'No'
              ]
            ],
            [
              3,
              'Foreign Characters',
              [
                'Include',
                'Ignore'
              ]
            ]
          ]
        ],
        [
          'Enigma Machine',
          'Enigma Machin Description',
          // TODO: Figure out how to add other Enigma Machine
          [
          ]
        ]
      ]
    ],

    [
      'Encoding',
      'Encoding Description', [
        [
          'Base64',
          'Base64 Description',
          [
            [
              0,
              'Variant',
              [
                'Standard \'bsae64\' ( RFC3548 , RFC4648 )',
                'Standard \'base64url\' ( RFC4648 §5 )',
                'Transfer Encoding for MIME ( RFC2045 )',
                'Original \'base64\' ( RFC1421 )'
              ]
            ]
          ]
        ],
        [
          'Ascii85',
          'Ascii85 Description',
          [
            [
              0,
              'Variant',
              [
                'Original',
                'Z85 ( Zero MQ )'
              ]
            ]
          ]
        ],
        [
          'URL Encoding',
          'URL Encoding Description',
          null
        ],
        [
          'Unicode Code Points',
          'Unicode Code Points Description',
          [
            [
              0,
              'Seperator',
              [
                ' '
              ]
            ],
            [
              1,
              'Format',
              [
                'Unicode Notation',
                'Decimal',
                'Hexadecimal',
                'Binary',
                'Octal',
                'NCR ( Decimal )',
                'NCR ( Hexadecimal )'
              ]
            ]
          ]
        ],
        [
          'Integer',
          'Integer Description',
          [
            [
              2,
              'Format',
              [
                'Binary',
                'Octal',
                'Decimal',
                'Hexadecimal'
              ]
            ],
            [
              3,
              'Type',
              [
                '8-Bit Unsigned Integer ( U8 )',
                '8-Bit Signed Integer ( I8 )',
                '16-Bit Unsigned Integer ( U16 )',
                '16-Bit Signed Integer ( I16 )',
                '32-Bit Unsigned Integer ( U32 )',
                '32-Bit Signed Integer ( I32 )',
              ]
            ]
          ]
        ]
      ]
    ],

    [
      'Modern Cryptography',
      'Modern Cryptography Description', [
        [
          'Block Cipher',
          'Block Cipher Description',
          [
            [
              0,
              'Algorithm',
              [
                'AES-128',
                'AES-256'
              ]
            ],
            [
              1,
              'Mode',
              [
                'CBC ( Cypher Block Chaining )',
                'CTR ( Counter )'
              ]
            ],
            [
              2,
              'Key',
              [
                '2b 7e 15 16 28 ae d2 a6 ab f7 15 88 09 cf 4f 3c'
              ]
            ],
            [
              3,
              'IV',
              [
                '00 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d 0e 0f'
              ]
            ]
          ]
        ],
        [
          'Hash Function',
          'Hash Function Description',
          [
            [
              0,
              'Algorithm',
              [
                'MD5',
                'SHA-1',
                'SHA-256',
                'SHA-384',
                'SHA-512'
              ]
            ]
          ]
        ],
        [
          'HMAC',
          'HMAC Description',
          [
            [
              1,
              'Key',
              [
                '63 72 79 70 74 69 69'
              ]
            ],
            [
              2,
              'Algorithm',
              [
                'MD5',
                'SHA-1',
                'SHA-256',
                'SHA-384',
                'SHA-512'
              ]
            ]
          ]
        ]
      ]
    ]
  ];
