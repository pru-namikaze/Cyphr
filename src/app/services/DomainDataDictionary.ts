// [
//   type: string,
//   typeDescription: string,
//   [
//     [
//       CypherOptions: string,
//       CypherDescription: string,
//       [
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
export let DomainDataDictionary: Array<[string, string, Array<[string, string, any]>]> =
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
              'Format',
              [
                'Hexadecimal',
                'Binary'
              ]
            ],
            [
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
              [
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
          ]
        ],
        [
          'Bitwise Opertion',
          'Bitwise Opertion Description',
          [
            [
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
          'Morse Code',
          'Morse Code Description',
          [
            [
              'Varient',
              [
                'English'
              ]
            ],
            [
              'Representation',
              [
                'Code',
                'Timming'
              ]
            ],
            [
              'Short',
              [
                '.'
              ]
            ],
            [
              'Long',
              [
                '-'
              ]
            ],
            [
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
              'Plain Text',
              [
                'abcdefghijklmnopqrstuvwxyz'
              ]
            ],
            [
              'Cipher Text',
              [
                'zyxwvutsrqponmlkjihgfedcba'
              ]
            ],
            [
              'Case Sensitivity',
              [
                'Yes',
                'No'
              ]
            ],
            [
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
              'Slope / A',
              [
                '1',
                '23'
              ]
            ],
            [
              'Intercept / B',
              [
                '1',
                '999'
              ]
            ],
            [
              'Alphabet',
              [
                'abcdefghijklmnopqrstuvwxyz'
              ]
            ],
            [
              'Case Sensitive',
              [
                'Yes',
                'No'
              ]
            ],
            [
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
              'Shift',
              [
                '1',
                '23'
              ]
            ],
            [
              'Alphabet',
              [
                'abcdefghijklmnopqrstuvwxyz'
              ]
            ],
            [
              'Case Sensitive',
              [
                'Yes',
                'No'
              ]
            ],
            [
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
              'Variant',
              [
                'Standard',
                'Beaufort Cypher',
                'Varient Beaufort Cypher',
                'Trithemius Cypher'
              ]
            ],
            [
              'Alphabet',
              [
                'abcdefghijklmnopqrstuvwxyz'
              ]
            ],
            [
              'Case Sensitive',
              [
                'Yes',
                'No'
              ]
            ],
            [
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
            'Variant',
            [
              'Original',
              'Z85 ( Zero MQ )'
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
              'Seperator',
              [
                ' '
              ]
            ],
            [
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
              'Format',
              [
                'Binary',
                'Octal',
                'Decimal',
                'Hexadecimal'
              ]
            ],
            [
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
              'Algorithm',
              [
                'AES-128',
                'AES-256'
              ]
            ],
            [
              'Mode',
              [
                'CBC ( Cypher Block Chaining )',
                'CTR ( Counter )'
              ]
            ],
            [
              'Key',
              [
                '2b 7e 15 16 28 ae d2 a6 ab f7 15 88 09 cf 4f 3c'
              ]
            ],
            [
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
            'Algorithm',
            [
              'MD5',
              'SHA-1',
              'SHA-256',
              'SHA-384',
              'SHA-512'
            ]
          ]
        ],
        [
          'HMAC',
          'HMAC Description',
          [
            [
              'Key',
              [
                '63 72 79 70 74 69 69'
              ]
            ],
            [
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
