import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as styles from './style';
import { MAIN_COLOR } from '../../styles/variables';
import { GlobalStyle } from '../../styles/mixins';

const Tag = ({
  id,
  tag,
  className,
  color,
  height,
  width,
  bgColor,
  border,
  disabled,
  customStyles,
  onHoverTag,
  onBlurTag,
  onClick,
  closeIcon,
  children,
  secondary,
  error,
}) => (
  <Fragment>
    <GlobalStyle />
    <styles.CustomTag
      id={id}
      className={`tag-4all ${className}`}
      color={color}
      height={height}
      width={width}
      bgColor={bgColor}
      disabled={disabled}
      customStyles={customStyles}
      border={border}
      onMouseLeave={onBlurTag ? () => onBlurTag : null}
      onMouseOver={onHoverTag ? () => onHoverTag(tag) : null}
      onFocus={onHoverTag ? () => onHoverTag(tag) : null}
      onClick={onClick}
      closeIcon={closeIcon}
      secondary={secondary}
      error={error}
    >
      {children}
      {closeIcon && (
        <img
          style={{ marginRight: '8px', display: 'flex', width: '20px' }}
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICA8ZyBmaWxsPSIjRkZGIj4KICAgIDxwYXRoIGQ9Ik0xNSAyOGM3LjE4IDAgMTMtNS44MiAxMy0xM1MyMi4xOCAyIDE1IDIgMiA3LjgyIDIgMTVzNS44MiAxMyAxMyAxM3ptMCAyQzYuNzE2IDMwIDAgMjMuMjg0IDAgMTUgMCA2LjcxNiA2LjcxNiAwIDE1IDBjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1eiIvPgogICAgPHBhdGggZD0iTTE0IDhhMSAxIDAgMCAxIDIgMHYxNGExIDEgMCAwIDEtMiAwVjh6Ii8+CiAgICA8cGF0aCBkPSJNOCAxNmExIDEgMCAwIDEgMC0yaDE0YTEgMSAwIDAgMSAwIDJIOHoiLz4KICA8L2c+Cjwvc3ZnPgo="
          alt="Icone 4all"
        />
      )}
    </styles.CustomTag>
  </Fragment>
);

Tag.propTypes = {
  id: PropTypes.string,
  tag: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  border: PropTypes.string,
  onHoverTag: PropTypes.func,
  onBlurTag: PropTypes.func,
  disabled: PropTypes.bool,
  customStyles: PropTypes.object,
  onClick: PropTypes.func,
  closeIcon: PropTypes.bool,
  children: PropTypes.any.isRequired,
  secondary: PropTypes.bool,
  error: PropTypes.bool,
};

Tag.defaultProps = {
  id: null,
  tag: {},
  className: '',
  color: '#FFF',
  height: '20px',
  width: '120px',
  bgColor: MAIN_COLOR,
  disabled: false,
  border: 'none',
  onHoverTag: null,
  onBlurTag: null,
  onClick: null,
  closeIcon: false,
  customStyles: null,
  secondary: false,
  error: false,
};


export default Tag;
