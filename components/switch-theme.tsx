import { useTheme } from 'next-themes'
import { Button, Icon } from '@/components/ui'
import { Switch, Case } from '@/components/switch'

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      size="icon"
      className="border rounded-full w-14 h-14"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Switch value={theme}>
        <Case value="dark">
          <Icon name="Moon" />
        </Case>
        <Case value="light">
          <Icon name="SunMoon" />
        </Case>
      </Switch>
    </Button>
  )
}

export { SwitchTheme }
