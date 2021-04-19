import React, { useState } from "react";
import "styles/css/components/common/searchinput.css";
import { SearchOutlined } from "@ant-design/icons";
interface Props {
  onSearch?: (query: string) => void;
}

export const SearchInput = (props: Props) => {
  const { onSearch } = props;
  const [query, setQuery] = useState<string>("");

  const onChangeText = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    if (e.keyCode === 13) {
      handleSearch()
    }
    return;
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
    return;
  }

  return (
    <div className="search__input-wrapper">
      <input
        name="search_input"
        className="search__input"
        type="text"
        placeholder="Ưhat do you ưant...."
        onChange={e => onChangeText(e)}
        onKeyDown={e => onSubmit(e)}
      />
      <button className="search__button-container" onClick={handleSearch}>
        <SearchOutlined />
      </button>
    </div>
  );
};
