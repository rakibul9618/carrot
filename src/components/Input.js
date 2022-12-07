import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const selectStyles = {
  container: (oldStyles) => ({
    ...oldStyles,
    marginBottom: 10,
    width: window.innerWidth < 765 ? '100%' : 'calc(70% + 40px)',
  }),
  control: (oldStyles, { isFocused }) => ({
    ...oldStyles,
    ':hover': {
      border: isFocused
        ? '1px solid var(--main-color)'
        : '1px solid var(--main-color)',
    },
    '> div': { padding: 0 },
    '> div:nth-of-type(2) > div': { marginRight: -10 },
    '> div:nth-of-type(2) > span': { width: 0 },
    backgroundColor: 'transparent',
    border: isFocused
      ? '1px solid var(--main-color)'
      : '1px solid var(--main-color)',
    fontSize: 18,
    height: 50,
    marginTop: 25,
    opacity: 1,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  }),
  input: (oldStyles) => ({ ...oldStyles, padding: 0 }),
  option: (oldStyles, { isFocused }) => ({
    ...oldStyles,
    backgroundColor: isFocused ? 'var(--main-color)' : '#FFF',
    color: isFocused ? '#FFF' : 'var(--main-color)',
    cursor: 'pointer',
  }),
};

class Input extends React.Component {
  state = {
    error: '',
    newValue: '',
  };

  componentDidMount() {
    const { value } = this.props;
    this.onChange(value);
  }

  onChange = (newValue) => {
    const { onChange } = this.props;
    this.setState(
      {
        newValue,
      },
      () => {
        onChange({ target: { value: newValue } });
      }
    );
  };

  render() {
    const {
      onChange,
      type,
      value,
      placeholder,
      options,
      disabled,
      autocomplete,
    } = this.props;
    const { error, newValue } = this.state;
    switch (type) {
      case 'select':
        return (
          <Select
            onChange={(option) => this.onChange(option.value)}
            value={options.find((option) => option.value === value)}
            placeholder={placeholder}
            styles={selectStyles}
            options={options}
          />
        );
      case 'radio':
        return (
          <div className="radio-group">
            {options.map((option) => (
              <div
                key={option.value}
                className="radio-item"
                onClick={() => this.onChange(option.value)}
              >
                <span
                  className={`radio-button${
                    newValue === option.value && value === option.value
                      ? ' active'
                      : ''
                  }`}
                >
                  <div />
                </span>
                {option.label}
              </div>
            ))}
          </div>
        );
      case 'email':
        return (
          <>
            <input
              disabled={disabled}
              type='email'
              className="input"
              onChange={onChange}
              type={type === 'number' ? 'text' : type}
              value={value}
              placeholder={placeholder}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              autoComplete={autocomplete}
            />
            
          </>
        );
      default:
        return (
          <>
            <input
              disabled={disabled}
              className="input"
              onChange={onChange}
              type={type === 'number' ? 'text' : type}
              value={value}
              placeholder={placeholder}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              autoComplete={autocomplete}
            />
            {error && <div className="placeholder">{placeholder}</div>}
          </>
        );
    }
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.string,
    }).isRequired
  ),
  placeholder: PropTypes.node,
  type: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
};

export default Input;
