```jsx
const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';

const Sandbox = () => {
  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={{
        body: { fontFamily: FONT_FAMILY_ROOT },
        button: { margin: '0 20px 20px 0' }
      }} />
      <Animator animator={{ animate: false }}>
        <Button palette='primary' disabled>
          <Text>Accept and Continue</Text>
        </Button>
        <Button palette='secondary' disabled>
          <Text>Accept and Continue</Text>
        </Button>
        <Button palette='success' disabled>
          <Text>Accept and Continue</Text>
        </Button>
        <Button palette='error' disabled>
          <Text>Accept and Continue</Text>
        </Button>
      </Animator>
    </ArwesThemeProvider>
  );
};

render(<Sandbox />);
```
