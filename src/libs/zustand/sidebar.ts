import { create } from 'zustand';

type SideBarItems = {
    path: string;
    active: boolean;
};

type SideBarProps = {
    items: SideBarItems[];
    setItems: (items: SideBarItems[]) => void;
    setActive: (item : SideBarItems) => void;
};

export const useSideBar = create<SideBarProps>((set) => ({
    items: [
        {
            path: '/',
            active: true,
        },
        {
            path: '/produtos',
            active: false,
        },
    ],
    setItems: (items) => set({ items }),
    setActive: (item) =>
        set((state) => ({
            items: state.items.map((i) => ({
                path: i.path,
                active: i.path === item.path,
            })),
        })),
}));

