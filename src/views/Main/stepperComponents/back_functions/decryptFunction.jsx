import React from "react";
import { decrypt_file } from "../../../../api/services";
import { open, save } from "@tauri-apps/api/dialog";

export const decryptCode = async (key, setError, setIsLoading) => {

    try {
      let inputDirectory = await open({
      });

      let outputDirectory = await save({
      });

      if (inputDirectory == null || outputDirectory == null) {
        setError("Es necesario seleccionar los directorios.");
      } 
      
      else {
        setIsLoading("encriptar");
        await decrypt_file(inputDirectory, outputDirectory, key);
      }

    } catch (err) {
      setError(err);
    }
};