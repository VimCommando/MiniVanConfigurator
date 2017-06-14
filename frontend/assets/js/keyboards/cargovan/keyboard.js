var cargovan = cargovan || {};

cargovan.layouts = [
  {
    name: 'standard',
    keys: [
      [
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 1875, type: 'spacer' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 1875, type: 'spacer' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' }
      ],
      [
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 1875, type: 'spacer' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 1875, type: 'spacer' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' }
      ],
      [
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 1875, type: 'spacer' },
        { size: 100, type: 'spacer' },
        { size: 100, type: 'spacer' },
        { size: 100, type: 'spacer' },
        { size: 1875, type: 'spacer' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' },
        { size: 100, type: 'primary' }
      ],
      [{ size: 100, type: 'spacer' }],
      [
        { size: 100, type: 'secondary' },
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
        { size: 175, type: 'secondary' }
      ],
      [
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
        { size: 100, type: 'secondary' }
      ],
      [
        { size: 125, type: 'secondary' },
        { size: 150, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 225, type: 'secondary' },
        { size: 200, type: 'secondary' },
        { size: 125, type: 'secondary' },
        { size: 150, type: 'secondary' },
        { size: 175, type: 'secondary' }
      ]
    ]
  }
];

cargovan.templates = [
  {
    name: 'standard',
    layout: 'standard',
    keys: [
      [
          [
            { value: 'F1', type: null, mod: null },
            { value: 'F2', type: null, mod: null },
            { value: 'F3', type: null, mod: null },
            { value: 'F4', type: null, mod: null },
            {},
            { value: 'HOME', type: null, mod: null },
            { value: 'UP', type: null, mod: null },
            { value: 'END', type: null, mod: null },
            {},
            { value: '7', type: null, mod: null },
            { value: '8', type: null, mod: null },
            { value: '9', type: null, mod: null },
            { value: '0', type: null, mod: null }
          ],
          [
            { value: 'F5', type: null, mod: null },
            { value: 'F6', type: null, mod: null },
            { value: 'F7', type: null, mod: null },
            { value: 'F8', type: null, mod: null },
            {},
            { value: 'LEFT', type: null, mod: null },
            { value: 'DOWN', type: null, mod: null },
            { value: 'RIGHT', type: null, mod: null },
            {},
            { value: '4', type: null, mod: null },
            { value: '5', type: null, mod: null },
            { value: '6', type: null, mod: null },
            { value: '0', type: null, mod: null }
          ],
          [
            { value: 'F9', type: null, mod: null },
            { value: 'F10', type: null, mod: null },
            { value: 'F11', type: null, mod: null },
            { value: 'F12', type: null, mod: null },
            {},
            {},
            {},
            {},
            {},
            { value: '1', type: null, mod: null },
            { value: '2', type: null, mod: null },
            { value: '3', type: null, mod: null },
            { value: '0', type: null, mod: null }
          ],
          [
            {},
          ],
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
          { value: 'BSPACE', type: null, mod: null }
        ],
        [
          { value: 'L1', type: 'momentary', mod: null },
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
          { value: '\'', type: 'tapkey', mod: 'L1' }
        ],
        [
          { value: 'ESCAPE', type: 'tapkey', mod: 'LSHIFT' },
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
          { value: 'L2', type: 'momentary', mod: null }
        ],
        [
          { value: 'LCTRL', type: null, mod: null },
          { value: 'L2', type: 'momentary', mod: null },
          { value: 'LGUI', type: null, mod: null },
          { value: 'ENTER', type: null, mod: null },
          { value: 'SPACE', type: null, mod: null },
          { value: 'RALT', type: null, mod: null },
          { value: 'RSHIFT', type: null, mod: null },
          { value: 'L3', type: 'toggle', mod: null }
        ]
      ]
    ]
  }
];

