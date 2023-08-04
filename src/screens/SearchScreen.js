import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cool Price Kraa"
          
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Some Dey Inside Small"
          
        />
        <ResultsList 
        results={filterResultsByPrice("$$$")} 
        title="Edey Cost" 
        
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
});

export default SearchScreen;
