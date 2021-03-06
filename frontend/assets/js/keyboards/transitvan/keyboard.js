var transitvan = transitvan || {};

transitvan.layouts = [
  {
    name: 'standard',
    keys: [
      [
        { size: 150, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 125, type: 'secondary' },
        { size: 100, type: 'secondary' }
      ],
      [
        { size: 175, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 200, type: 'secondary' }
      ],
      [
        { size: 100, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 150, type: 'secondary' }
      ],
      [
        { size: 100, type: 'secondary' },
        { size: 975, type: 'primary' },
        { size: 100, type: 'secondary' }
      ]
    ]
  }
];

transitvan.templates = [
  {
    name: 'standard',
    layout: 'standard',
    keys: [
      [
        [
          { value: 'TAB', type: null, mod: null },
          { value: 'Q', type: null, mod: null },
          { value: 'W', type: null, mod: null },
          { value: 'E', type: null, mod: null },
          { value: 'R', type: null, mod: null },
          { value: 'T', type: null, mod: null },
          { value: 'Y', type: null, mod: null },
          { value: 'U', type: null, mod: null },
          { value: 'I', type: null, mod: null },
          { value: 'O', type: null, mod: null },
          { value: 'P', type: null, mod: null },
          { value: 'BSPACE', type: null, mod: null },
          { value: 'DEL', type: null, mod: null }
        ],
        [
          { value: 'ESCAPE', type: 'tapkey', mod: 'L1' },
          { value: 'A', type: null, mod: null },
          { value: 'S', type: null, mod: null },
          { value: 'D', type: null, mod: null },
          { value: 'F', type: null, mod: null },
          { value: 'G', type: null, mod: null },
          { value: 'H', type: null, mod: null },
          { value: 'J', type: null, mod: null },
          { value: 'K', type: null, mod: null },
          { value: 'L', type: null, mod: null },
          { value: ';', type: null, mod: null },
          { value: 'ENTER', type: 'tapkey', mod: 'L1' }
        ],
        [
          { value: 'L3', type: 'toggle', mod: null },
          { value: 'LSHIFT', type: 'oneshot', mod: null },
          { value: 'Z', type: null, mod: null },
          { value: 'X', type: null, mod: null },
          { value: 'C', type: null, mod: null },
          { value: 'V', type: null, mod: null },
          { value: 'B', type: null, mod: null },
          { value: 'N', type: null, mod: null },
          { value: 'M', type: null, mod: null },
          { value: ',', type: null, mod: null },
          { value: '.', type: null, mod: null },
          { value: '/', type: null, mod: null },
          { value: 'RSHIFT', type: null, mod: null }
        ],
        [
          { value: 'LCTRL', type: null, mod: null },
          { value: 'SPACE', type: 'tapkey', mod: 'L2' },
          { value: 'LALT', type: null, mod: null }
        ]
      ],
      [
        [
          { value: '`', type: null, mod: null },
          { value: '!', type: null, mod: null },
          { value: '@', type: null, mod: null },
          { value: '#', type: null, mod: null },
          { value: '$', type: null, mod: null },
          { value: '%', type: null, mod: null },
          { value: '^', type: null, mod: null },
          { value: '&', type: null, mod: null },
          { value: '*', type: null, mod: null },
          { value: '(', type: null, mod: null },
          { value: ')', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null }
        ],
        [
          { value: 'TRNS', type: null, mod: null },
          { value: '\\', type: null, mod: null },
          { value: '\'', type: null, mod: null },
          { value: '-', type: null, mod: null },
          { value: '=', type: null, mod: null },
          { value: '[', type: null, mod: null },
          { value: ']', type: null, mod: null },
          { value: 'DOWN', type: null, mod: null },
          { value: 'UP', type: null, mod: null },
          { value: 'LEFT', type: null, mod: null },
          { value: 'RIGHT', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null }
        ],
        [
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'ESCAPE', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'PRINT', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'MSTP', type: null, mod: null },
          { value: 'MPLY', type: null, mod: null },
          { value: 'MPRV', type: null, mod: null },
          { value: 'MNXT', type: null, mod: null },
          { value: 'RSHIFT', type: null, mod: null }
        ],
        [
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null }
        ]
      ],
      [
        [
          { value: '~', type: null, mod: null },
          { value: '1', type: null, mod: null },
          { value: '2', type: null, mod: null },
          { value: '3', type: null, mod: null },
          { value: '4', type: null, mod: null },
          { value: '5', type: null, mod: null },
          { value: '6', type: null, mod: null },
          { value: '7', type: null, mod: null },
          { value: '8', type: null, mod: null },
          { value: '9', type: null, mod: null },
          { value: '0', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null},
          { value: 'TRNS', type: null, mod: null}
        ],
        [
          { value: 'ESCAPE', type: null, mod: null },
          { value: '|', type: null, mod: null },
          { value: '"', type: null, mod: null },
          { value: '_', type: null, mod: null },
          { value: '+', type: null, mod: null },
          { value: '{', type: null, mod: null },
          { value: '}', type: null, mod: null },
          { value: '4', type: null, mod: null },
          { value: '5', type: null, mod: null },
          { value: '6', type: null, mod: null },
          { value: 'VOLU', type: null, mod: null },
          { value: 'ENTER', type: null, mod: null }
        ],
        [
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: '0', type: null, mod: null },
          { value: '1', type: null, mod: null },
          { value: '2', type: null, mod: null },
          { value: '3', type: null, mod: null },
          { value: 'VOLD', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null }
        ],
        [
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null }
        ]
      ],
      [
        [
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'F1', type: null, mod: null },
          { value: 'F2', type: null, mod: null },
          { value: 'F3', type: null, mod: null },
          { value: 'F4', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null }
        ],
        [
          { value: 'ESCAPE', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'F5', type: null, mod: null },
          { value: 'F6', type: null, mod: null },
          { value: 'F7', type: null, mod: null },
          { value: 'F8', type: null, mod: null },
          { value: 'ENTER', type: null, mod: null }
        ],
        [
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: '1', type: null, mod: null },
          { value: '2', type: null, mod: null },
          { value: '3', type: null, mod: null },
          { value: '4', type: null, mod: null },
          { value: '5', type: null, mod: null },
          { value: '6', type: null, mod: null },
          { value: 'F9', type: null, mod: null },
          { value: 'F10', type: null, mod: null },
          { value: 'F11', type: null, mod: null },
          { value: 'F12', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null }
        ],
        [
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null },
          { value: 'TRNS', type: null, mod: null }
        ]
      ]
    ]
  }
];
