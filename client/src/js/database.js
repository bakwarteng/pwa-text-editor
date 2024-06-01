import { openDB } from "idb";

const initdb = async () => {
  openDB("jate", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("jate")) {
        db.createObjectStore("jate", {
          keyPath: "id",
          autoIncrement: true,
        });
        console.log("jate database created");
      }
    },
  });
};

// Method to add content to the database
export const putDb = async (content) => {
  console.log("Content PUT to the database");
  const jate = await openDB("jate", 1);
  const trans = jate.transaction("jate", "readwrite");
  const store = trans.objectStore("jate");
  await store.put({ id: 1, value: content });
};

// Method to get all content from the database
export const getDb = async () => {
  console.log("GET all from the database");
  const jate = await openDB("jate", 1);
  const trans = jate.transaction("jate", "readonly");
  const store = trans.objectStore("jate");
  const request = store.getOne(1);
  const result = await request;
  console.log("All content from the database:", result);
  return result;
};

initdb();
