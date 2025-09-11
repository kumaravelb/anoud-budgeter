import { Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

const themes = [
  { name: 'Default Blue', value: 'default', colors: ['bg-blue-500', 'bg-blue-400', 'bg-blue-300'] },
  { name: 'Emerald Green', value: 'emerald', colors: ['bg-emerald-500', 'bg-emerald-400', 'bg-emerald-300'] },
  { name: 'Purple', value: 'purple', colors: ['bg-purple-500', 'bg-purple-400', 'bg-purple-300'] },
  { name: 'Orange', value: 'orange', colors: ['bg-orange-500', 'bg-orange-400', 'bg-orange-300'] },
  { name: 'Dark Mode', value: 'dark', colors: ['bg-gray-800', 'bg-gray-600', 'bg-gray-400'] },
];

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Paintbrush className="h-4 w-4" />
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.value}
            onClick={() => setTheme(themeOption.value as any)}
            className="flex items-center gap-3 p-3"
          >
            <div className="flex gap-1">
              {themeOption.colors.map((color, index) => (
                <div key={index} className={`w-3 h-3 rounded-full ${color}`} />
              ))}
            </div>
            <span className="flex-1">{themeOption.name}</span>
            {theme === themeOption.value && (
              <span className="text-primary font-semibold">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;