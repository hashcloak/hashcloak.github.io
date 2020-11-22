import { useRef, useEffect } from 'react';
import * as typeformEmbed from "@typeform/embed";

const TypeFormEmbed = () => {
  const typeformRef = useRef(null);

  useEffect(() => typeformEmbed.makeWidget(typeformRef.current, 'https://form.typeform.com/to/sDcIwgCP', {
    hideFooter: true,
    hideHeaders: true,
    opacity: 0,
  }), [typeformRef]);

  const Typeform = `<div ref={ typeformRef }> </div>`;
  return (
    { Typeform }
  );
}

export default TypeFormEmbed