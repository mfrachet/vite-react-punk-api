import { Button } from "@/ui/components/Button";
import { useChangeTheme } from "../hooks/useChangeTheme";

export const ToggleTheme = () => {
  const toggleTheme = useChangeTheme();

  return (
    <Button onClick={toggleTheme} $variant="secondary">
      Toggle theme
    </Button>
  );
};
