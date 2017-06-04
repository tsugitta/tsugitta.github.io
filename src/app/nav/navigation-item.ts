export interface NavigationItem {
  displayName: string;
  path: string;
  materialIconName: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    displayName: `Profile`,
    path: 'profile',
    materialIconName: 'person',
  },
  {
    displayName: `Contributions (WIP)`,
    path: 'contributions',
    materialIconName: 'timeline',
  },
  {
    displayName: `Diary (WIP)`,
    path: 'diaries',
    materialIconName: 'music_note',
  },
];
