import React, { ComponentType, FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { darkLightBlue } from '../../../constants/colors';

import styles from './styles';

interface LoadingProps {
  loading: boolean;
}

function Loading<P extends object>(Component: ComponentType<P>): FC<P & LoadingProps> {
  return ({ loading, ...props }: LoadingProps) =>
    loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={darkLightBlue} />
      </View>
    ) : (
      <Component {...(props as P)} />
    );
}

export default Loading;
