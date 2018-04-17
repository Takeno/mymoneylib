import React from 'react';
import styled from 'styled-components';

const Image = styled.Image`
    width: 26px;
    height: 26px;
`;

const TabBarIcon = icon => ({tintColor}) => <Image source={icon} style={{tintColor: tintColor}} />;

export default TabBarIcon;