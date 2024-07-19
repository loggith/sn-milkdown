import React from 'react';
import snApi from "sn-extension-api";

const CustomEditor = () => {
  const spacing = snApi.extensionMeta?.spacing || 'Default';

  return (
    <div className={'main__' + spacing}>
      MilkdownEditorWrapper
    </div>
  );
}

export default CustomEditor
