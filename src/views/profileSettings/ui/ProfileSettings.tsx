import { Tabs } from '@/shared/ui/tabs'

export default function ProfileSettings() {
  return (
    <div>
      <Tabs
        defaultValue={'1'}
        tabs={[
          {
            content: <div>General information Content</div>,
            title: 'General information',
            value: '1',
          },
          { content: <div>Devices Content</div>, title: 'Devices', value: '2' },
          {
            content: <div>Account Management Content</div>,
            title: 'Account Management',
            value: '3',
          },
          { content: <div>My payments Content</div>, title: 'My payments', value: '4' },
        ]}
      />
    </div>
  )
}
