import * as React from "react";
import {
  DataGrid,
  DataGridProps, 
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridColDef,
  GridPagination,
  GridToolbarQuickFilter,
  GridOverlay,
} from "@mui/x-data-grid";
import dayjs, { Dayjs } from "dayjs";
import { Box, Skeleton, useMediaQuery, GlobalStyles } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SkeletonLoader from "./PheonixSkeleton";
import themestyle from "../theme";
import { CSSProperties } from "react";
import PheonixSearch from "./PheonixSearch";

interface ToolbarProps {
  onExportClick?: () => void;
  onFilterChange?: (value: string) => void;
}

interface PheonixTableProps extends Partial<DataGridProps> {
  columns: GridColDef[];
  rows: any[];
  height?: number;
  width?: string;
  sx?: Record<string, any>;
  components?: {
    Toolbar?: React.ElementType<ToolbarProps>;
  };
  paginationModel?: {
    pageSize: number;
    page: number;
  };
  onPaginationModelChange?: (newPaginationModel: {
    pageSize: number;
    page: number;
  }) => void;
  pageSizeChange?: (newPageSize: number) => void;
  pageChange?: (newPage: number) => void;
  selectedDate?: Dayjs | null;
  setSelectedDate?: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  handleDateChange?: (newDate: Dayjs | null) => void;
  pageSizeOptions?: number[];
  loader?: React.ReactNode;
  rowCount?: number;
  pageSize?: number;
  currentPage?: number;
  paginationMeta?: any;
  paginationMode?: any;
  customProp?: string;
  style?: CSSProperties;
  loading?: boolean;
  onSearchQueryChange?: (newQuery: string) => void;
  searchQuery: string;
}

interface CustomToolbarProps {
  updatedColumns: GridColDef[];
  onSearchQueryChange: (query: string) => void;
  searchQuery: string;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({
  updatedColumns,
  searchQuery,
  onSearchQueryChange,
}) => {
  const theme = useTheme();
  const isMobileL = useMediaQuery("(max-width: 425px) and (max-height: 608px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        padding: "8px",
        alignItems: "center",
        "@media (max-width: 425px) and (max-height: 608px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          "@media (max-width: 425px) and (max-height: 608px)": {
            width: "100%",
            justifyContent: "space-between",
          },
        }}
      >
        <Box sx={{ display: "flex", gap: "8px" }}>
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <GridToolbarDensitySelector />
          <GridToolbarExport
            csvOptions={{
              disableToolbarButton: false,
              fields: updatedColumns
                .filter((column) => column.field !== "actions")
                .map((column) => column.field),
            }}
            printOptions={{
              disableToolbarButton: true,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          "@media (min-width: 426px)": {
            width: "auto",
            marginLeft: "auto",
          },
        }}
      >
        <div style={{ marginTop: "10px" }}>
          {onSearchQueryChange && (
            <PheonixSearch value={searchQuery} onChange={onSearchQueryChange} />
          )}
        </div>
      </Box>
    </Box>
  );
};

const PheonixTable: React.FC<PheonixTableProps> = ({
  columns,
  rows,
  pageSizeOptions,
  paginationModel,
  rowCount,
  onPaginationModelChange,
  onSearchQueryChange = () => {},
  searchQuery,
  paginationMode,
  width = "100%",
  height = "70vh",
  loading,
  sx,
}) => {
  const theme = useTheme();
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;

  if (screenHeight > 1500) {
    height = "90vh";
  } else if (screenHeight > 1000) {
    height = "80vh";
  } else if (screenHeight === 642 && screenWidth === 768) {
    height = "70vh";
  } else if (screenHeight < 800 && screenHeight > 650) {
    height = "70vh";
  }

  const renderStatusCell = (params: any) => {
    if (!params || !params.row) return "";
    const { row } = params;
    return ` Success ${row.SuccessCount} / Failed ${row.FailedCount} `;
  };

  const updatedColumns = columns.map((column: any) => {
    if (column.field === "actions") {
      return {
        ...column,
        valueGetter: renderStatusCell,
      };
    }
    return column;
  });
  function CustomNoRowsOverlay() {
    return (
      <GridOverlay>
        {rows.length === 0 && searchQuery ? (
          <Box sx={{ mt: 1 }}>No match found</Box>
        ) : (
          <Box sx={{ mt: 1 }}>No rows</Box>
        )}
      </GridOverlay>
    );
  }

  return (
    <Box
      style={{
        width: width,
        height: height,
        position: "relative",
      }}
    >
      <GlobalStyles
        styles={{
          "::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#C4E0E9",
            borderRadius: "10px",
          },
          "::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },
        }}
      />
      <DataGrid
        rows={rows}
        columns={updatedColumns}
        paginationModel={paginationModel}
        rowCount={rowCount}
        paginationMode="server"
        disableRowSelectionOnClick
        onPaginationModelChange={onPaginationModelChange}
        pageSizeOptions={pageSizeOptions || [5, 10, 20, 30]}
        loading={false}
        autoHeight={false}
        slots={{
          toolbar: (toolbarProps) => (
            <CustomToolbar
              {...toolbarProps}
              updatedColumns={updatedColumns}
              onSearchQueryChange={onSearchQueryChange}
              searchQuery={searchQuery}
            />
          ),
          pagination: GridPagination,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: {
              debounceMs: 250,
            },
          },
        }}
        sx={{
          ...sx,
          borderRadius: "20px",
          padding: "20px",
          "& .MuiDataGrid-root": {
            minWidth: 300,
            overflowY: "auto",
          },
          "& .css-t89xny-MuiDataGrid-columnHeaderTitle": {
            fontFamily: "Roboto, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--text-primary, #000000DE)",
          },
          "& .css-mh3zap": {
            fontWeight: 700,
          },
          "& .MuiTablePagination-selectLabel": {
            display: "block",
          },

          "& .MuiTablePagination-select": {
            display: "flex",
            alignItems: "center",
            gap: "4px",
          },
          "@media (max-width: 600px)": {
            "& .MuiDataGrid-root": {
              minWidth: "100%",
            },
            "& .MuiDataGrid-cell": {
              whiteSpace: "normal",
              overflow: "visible",
            },
            "& .css-rtrcn9-MuiTablePagination-root .MuiTablePagination-selectLabel":
              {
                display: "block",
              },

            "& .css-194a1fa-MuiSelect-select-MuiInputBase-input": {
              width: "50%",
            },
            "& .css-1cccqvr": {
              width: "50%",
            },
            "& .css-whi0l6 .MuiTablePagination-selectLabel": {
              display: "block",
            },

            "& .MuiTablePagination-input": {
              display: "block",
            },
          },
          "@media (max-width: 425px) and (max-height: 608px)": {
            "& .MuiDataGrid-root": {
              minWidth: "100%",
            },
            "& .MuiDataGrid-cell": {
              whiteSpace: "normal",
              overflow: "visible",
            },
            "& .MuiDataGrid-toolbarContainer": {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            },
            "& .MuiTablePagination-selectLabel": {
              display: "block",
            },

            "& .MuiTablePagination-select": {
              minHeight: "32px",
              fontSize: "0.875rem",
            },
          },
          ".makeStyles-caption-2[id]": {
            display: "none",
          },
          "@media (min-width:960px)": {
            ".makeStyles-caption-2[id]": {
              display: "block",
            },
          },
        }}
      />
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <SkeletonLoader />
        </Box>
      )}
    </Box>
  );
};

export default PheonixTable;
