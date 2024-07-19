import React from 'react';
import snApi from "sn-extension-api";
import { MilkdownEditorWrapper } from './Milkdown';

const CustomEditor = () => {
  const spacing = snApi.extensionMeta?.spacing || 'Default';

  return (
    <div className={'main__' + spacing}>
      <MilkdownEditorWrapper/>
    </div>
  );
}

export default CustomEditor
