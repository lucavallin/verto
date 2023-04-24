import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppContext } from "../_app";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function SearchBar() {
  const { repositories, languages, topics } = useAppContext();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();


  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    router.push(`/search/${query.toLowerCase()}`);
  };

  const handleChange = (event: React.SyntheticEvent<Element, Event>) => {    
    const value = (event.currentTarget as HTMLInputElement).value.toLowerCase();

    if (value.length >= 2) {
      const queriedLanguages = languages.filter((language) => language.id.toLowerCase().includes(value)).map((language) => language.id);

      const queriedTopics = topics.filter((topic) => topic.display?.toLowerCase().includes(value)).map((topic) => topic.id);

      const queriedRepositories = repositories.filter(
        (repository) =>
          repository.owner.toLowerCase().includes(value) ||
          repository.name.toLowerCase().includes(value) ||
          repository.issues?.some((issue) => issue.title.toLowerCase().includes(value))
      ).map((repository) => repository.name);

      let inputSuggestions = queriedLanguages.concat(queriedTopics);
      inputSuggestions = inputSuggestions.concat(queriedRepositories);
      
      setSuggestions(inputSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter'){
      const value = (event.target as HTMLInputElement).value;
      setQuery(value);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Autocomplete
        freeSolo
        id="combo-box-demo"
        options={suggestions}
        sx={{ width: 250 }}
        style={{ backgroundColor: '#3B3B3B', borderColor: '#2196F3', borderRadius: '15px' }}
        clearOnBlur={false}
        disableClearable={true}
        renderInput={(params) => 
          <TextField {...params} label="Search term"
          onChange={handleChange}
          onKeyPress={handleEnterKey}
          InputProps={{
            ...params.InputProps,
            type: 'search',
            style: {color: '#fff'},
            endAdornment: (
              <InputAdornment position="end" style={{ color: 'white'}}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { color: "#fff" }
          }}  
        />}
      />
    </form>  
  );
}
