import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

const themes = [
  { name: 'Default Blue', value: 'default', color: 'bg-blue-500' },
  { name: 'Emerald Green', value: 'emerald', color: 'bg-emerald-500' },
  { name: 'Purple', value: 'purple', color: 'bg-purple-500' },
  { name: 'Orange', value: 'orange', color: 'bg-orange-500' },
  { name: 'Dark Mode', value: 'dark', color: 'bg-gray-800' },
];

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Palette className="h-4 w-4" />
          Theme
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value as any)}
            className="flex items-center gap-2"
          >
            <div className={`w-3 h-3 rounded-full ${themeOption.color}`} />
            <span>{themeOption.name}</span>
            {theme === themeOption.value && (
              <span className="ml-auto text-xs">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;