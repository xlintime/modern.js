// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useContext } from 'react';
import {
  DOCUMENT_CHUNKSMAP_PLACEHOLDER,
  DOCUMENT_SSRDATASCRIPT_PLACEHOLDER,
} from './constants';
import { DocumentStructureContext } from './DocumentStructureContext';
import { DefaultRoot } from './Root';

export function Body(props: { children?: any }) {
  const { hasSetRoot } = useContext(DocumentStructureContext);
  const { children } = props;
  return (
    <body>
      {hasSetRoot ? null : <DefaultRoot />}
      {children}
      {`${DOCUMENT_CHUNKSMAP_PLACEHOLDER}`}
      {`${DOCUMENT_SSRDATASCRIPT_PLACEHOLDER}`}
    </body>
  );
}
