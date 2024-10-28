'use client';

import { Slider } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

export default function Page() {
  return (
    <>
      <Slider
        label="Temperature"
        step={0.01}
        maxValue={1}
        minValue={0}
        defaultValue={0.4}
        className="max-w-md w-full h-12"
      />
      <Button color="primary" className="bg-red-600">
        Button
      </Button>
    </>
  );
}
