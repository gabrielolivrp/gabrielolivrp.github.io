import { useTheme } from 'next-themes'
import { Button, Icon } from '@/components/ui'
import { Switch, Case } from '@/components/switch'

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
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
