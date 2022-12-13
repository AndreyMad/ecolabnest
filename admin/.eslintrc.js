module.exports = {
    extends: ['airbnb', 'airbnb/hooks'],
    root: true,
    env: {
        node: true,
        jest: false,
        browser: true,
    },
    rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': 'off',
        'import/prefer-default-export': 'off',
        'guard-for-in': 'off',
        'no-param-reassign': 'off',
        'import/extensions': 'off',
        'react/prop-types': 'off',
        'import/named': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-mixed-operators': 'off',
        'react/jsx-no-bind': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'import/no-named-as-default': 'off',
        'jsx-a11y/label-has-associated-control': 'off'
    },
};
