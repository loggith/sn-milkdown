import React from 'react';
import snApi from "sn-extension-api";

const CustomEditor = () => {
  const spacing = snApi.extensionMeta?.spacing || 'Default';

  return (
    <div className={'main__' + spacing}>
      
    </div>
  );
}

export default CustomEditor
