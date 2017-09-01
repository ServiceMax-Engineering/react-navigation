import Config from 'react-native-config';

const getTestIDProps = testID => ({
  // testID,
  accessibilityLabel: Config.AUTOMATION_BUILD === 'true' ? `${testID}_ACLBL` : null
});
export default getTestIDProps;
