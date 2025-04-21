<template>
  <Button id="target-element" mode="outline">
    Hover Me
  </Button>
  <FixWindow :el="'#target-element'" mode="outlined">
    This window is aligned to the button.
  </FixWindow>
</template>