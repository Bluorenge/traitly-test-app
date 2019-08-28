/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const SearchPanel = styled.section`
  padding: 20px;
  padding-bottom: 0;
`;

const SearchPanelWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 35px;
  border-radius: 5px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.05);
`;

const SearchPanelInput = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const SearchPanelBtn = styled.button`
  position: relative;
  border: none;
  background: transparent;
  font-size: 0;
  width: 40px;

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 8px;
    width: 20px;
    height: 20px;
    background: url("./search-icon.png") 100% 100% no-repeat;
  }
`;

const SearchField = () => {
  return (
    <SearchPanel>
      <SearchPanelWrap>
        <SearchPanelInput type="text" placeholder="Search" />
        <SearchPanelBtn>Поиск</SearchPanelBtn>
      </SearchPanelWrap>
    </SearchPanel>
  );
};

export default SearchField;
