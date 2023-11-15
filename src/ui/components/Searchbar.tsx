import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { Flex } from "./Flex";

export interface SearchBarProps {
  label: string;
  placeholder: string;
  submitLabel: string;
  clearLabel: string;
}

const SearchInput = styled.input`
  border: 1px solid ${(p) => p.theme.colors.text[300]};
  background: ${(p) => p.theme.colors.text[50]};
  color: ${(p) => p.theme.colors.text[900]};
  border-radius: ${(p) => p.theme.radius.sm};
  padding: ${(p) => p.theme.spacing[2]} ${(p) => p.theme.spacing[4]};
  width: 100%;
`;

export const Searchbar = ({
  label,
  placeholder,
  clearLabel,
  submitLabel,
}: SearchBarProps) => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const partialBeerName = formData.get("search")?.toString() || "";

    setSearchParams({ beer: partialBeerName });
  };

  const clearSearch = () => {
    setSearchParams({});
  };

  return (
    <form role="search" onSubmit={handleSubmit}>
      <Flex $orientation={{ initial: "column", md: "row" }} $gap={2}>
        <SearchInput
          type="search"
          name="search"
          aria-label={label}
          placeholder={placeholder}
        />
        <Button type="submit">{submitLabel}</Button>
        <Button type="button" onClick={clearSearch} $variant="secondary">
          {clearLabel}
        </Button>
      </Flex>
    </form>
  );
};
