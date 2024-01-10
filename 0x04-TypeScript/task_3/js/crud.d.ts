// task_3/js/crud.d.ts

/// <reference path="./interface.ts" />

declare module "crud" {
    import { RowID, RowElement } from "interface";
  
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
  }
  