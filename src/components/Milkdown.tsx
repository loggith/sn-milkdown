import React, { useState } from 'react';
import snApi from "sn-extension-api";

import { Editor, rootCtx, defaultValueCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react';
import { commonmark } from '@milkdown/preset-commonmark';
import { listener, listenerCtx } from '@milkdown/plugin-listener';

const MilkdownEditor: React.FC = () => {
    const [value, setValue] = useState(snApi.text);
    const { get } = useEditor((root) =>
        Editor.make()
            .config(nord)
            .config((ctx) => {
                ctx.set(rootCtx, root);
                ctx.set(defaultValueCtx, value);
                ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
                    setValue(markdown);
                    snApi.text = markdown;
                });
            })
            .use(listener)
            .use(commonmark),
    );

    return <Milkdown />;
};

export const MilkdownEditorWrapper: React.FC = () => {
    return (
        <MilkdownProvider>
            <MilkdownEditor />
        </MilkdownProvider>
    );
};
