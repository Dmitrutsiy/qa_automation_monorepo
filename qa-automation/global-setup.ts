import mysql from "mysql2/promise";
import { createDbConnection } from "./db/db-client";
import { TEST_RECIPE_TITLE_PREFIX } from "./tests/helpers/unique-data";

export default async function globalSetup(): Promise<void> {
  const connection = await createDbConnection();

  const [result] = await connection.execute<mysql.ResultSetHeader>(
    "delete from recipes where title like ?",
    [`${TEST_RECIPE_TITLE_PREFIX}%`],
  );

  console.log(
    `[global-setup], убрано тестовых рецептов ${result.affectedRows}`,
  );
  await connection.end();
}
