import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef, useState } from 'react';

import { Container, InputC } from './style';

interface IInputSearchProps extends ComponentProps<'input'> {}

export const InputSearch = forwardRef<HTMLInputElement, IInputSearchProps>(
  ({ ...props }, ref) => {
    const [openInput, setOpenInput] = useState<boolean>(false);

    function handleOpenInput() {
      setOpenInput(true);
    }

    function handleBlur() {
      setOpenInput(false);
    }

    return (
      <Container>
        <InputC
          {...props}
          ref={ref}
          $openInput={openInput}
          onClick={handleOpenInput}
          onBlur={handleBlur}
        />

        <MagnifyingGlassIcon color="#fff" className="icon" />
      </Container>
    );
  },
);
