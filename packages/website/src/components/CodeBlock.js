import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useMDXComponents, mdx } from '@mdx-js/react';
import { Box, theme as nucleusTheme } from '@nucleus/core';
const { colors } = nucleusTheme;

const theme = {
  plain: {
    color: colors.gray800,
    backgroundColor: colors.gray100,
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'hsl(330, 75%, 45%)',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: colors.gray600,
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: 'hsl(180, 55%, 35%)',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: 'hsl(195, 90%, 35%)',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: 'hsl(330, 75%, 45%)',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: 'hsl(180, 50%, 35%)',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: colors.blue700,
      },
    },
  ],
};

export default ({ children, live, removeFragment }) => {
  const components = useMDXComponents();

  const liveProviderProps = {
    transformCode: code => (removeFragment ? code : `<>${code}</>`),
    scope: { mdx, ...components },
  };

  if (live) {
    return (
      <Box mt={4}>
        <LiveProvider code={children.trim()} {...liveProviderProps} theme={theme}>
          <LivePreview
            style={{
              padding: nucleusTheme.space[3],
              border: `1px solid ${colors.gray300}`,
              borderTopLeftRadius: nucleusTheme.radii[2],
              borderTopRightRadius: nucleusTheme.radii[2],
            }}
          />

          <LiveEditor
            padding={nucleusTheme.space[3]}
            style={{
              borderBottomLeftRadius: nucleusTheme.radii[2],
              borderBottomRightRadius: nucleusTheme.radii[2],
              border: `1px solid ${colors.gray300}`,
              borderTop: 'none',
              fontSize: nucleusTheme.fontSizes[2],
              fontFamily: nucleusTheme.fonts.mono,
              fontWeight: 400,
              lineHeight: 1.5,
            }}
            css={{ textarea: { outline: 0 } }}
          />

          <LiveError />
        </LiveProvider>
      </Box>
    );
  }

  return (
    <Box mt={4}>
      <LiveProvider code={children.trim()} {...liveProviderProps} theme={theme}>
        <LiveEditor
          padding={nucleusTheme.space[3]}
          style={{
            borderRadius: nucleusTheme.radii[2],
            border: `1px solid ${colors.gray300}`,
            fontSize: nucleusTheme.fontSizes[2],
            fontFamily: nucleusTheme.fonts.mono,
            fontWeight: 400,
            letterSpacing: '-0.0175em',
            lineHeight: 1.5,
          }}
          css={{ textarea: { paddingBottom: '0 !important' } }}
          disabled
        />
      </LiveProvider>
    </Box>
  );
};
