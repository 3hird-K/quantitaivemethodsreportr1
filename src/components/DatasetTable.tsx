'use client';

import { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const dataset = [
  { id: 1, ram: 8, ssd: 256, price: 28500 },
  { id: 2, ram: 8, ssd: 512, price: 32000 },
  { id: 3, ram: 16, ssd: 512, price: 45000 },
  { id: 4, ram: 16, ssd: 1024, price: 52000 },
  { id: 5, ram: 4, ssd: 128, price: 18900 },
  { id: 6, ram: 32, ssd: 1024, price: 85000 },
  { id: 7, ram: 16, ssd: 256, price: 38000 },
  { id: 8, ram: 8, ssd: 1024, price: 39500 },
  { id: 9, ram: 12, ssd: 512, price: 35500 },
  { id: 10, ram: 64, ssd: 2048, price: 145000 },
  { id: 11, ram: 8, ssd: 256, price: 27900 },
  { id: 12, ram: 16, ssd: 512, price: 46000 },
  { id: 13, ram: 4, ssd: 256, price: 22000 },
  { id: 14, ram: 32, ssd: 512, price: 65000 },
  { id: 15, ram: 8, ssd: 128, price: 24500 },
  { id: 16, ram: 16, ssd: 256, price: 38000 },
  { id: 17, ram: 8, ssd: 512, price: 31500 },
  { id: 18, ram: 4, ssd: 128, price: 17500 },
  { id: 19, ram: 16, ssd: 1024, price: 54000 },
  { id: 20, ram: 32, ssd: 512, price: 62000 },
  { id: 21, ram: 8, ssd: 256, price: 29000 },
  { id: 22, ram: 16, ssd: 512, price: 44500 },
  { id: 23, ram: 8, ssd: 512, price: 33000 },
  { id: 24, ram: 4, ssd: 256, price: 21000 },
  { id: 25, ram: 16, ssd: 1024, price: 55500 },
  { id: 26, ram: 32, ssd: 1024, price: 82000 },
  { id: 27, ram: 8, ssd: 256, price: 28200 },
  { id: 28, ram: 16, ssd: 512, price: 43800 },
  { id: 29, ram: 12, ssd: 256, price: 34000 },
  { id: 30, ram: 16, ssd: 1024, price: 53200 }
];

export function DatasetTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredData = useMemo(() => {
    const term = search.toLowerCase();
    return dataset.filter(row =>
      row.id.toString().includes(term) ||
      row.ram.toString().includes(term) ||
      row.ssd.toString().includes(term) ||
      row.price.toString().includes(term)
    );
  }, [search]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="w-full flex flex-col gap-4" data-aos="fade-up" data-aos-delay="400">
      {/* <div className="relative w-full md:w-80">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input 
          type="text"
          placeholder="Search models, specs, or prices..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="w-full pl-11 pr-4 py-2.5 bg-card/60 backdrop-blur-xl border border-border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground shadow-sm"
        />
      </div> */}

      <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-xl overflow-hidden shadow-sm w-full">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-card/40 border-b border-border/50">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[120px] font-medium text-muted-foreground h-12">Model ID</TableHead>
                <TableHead className="font-medium text-muted-foreground h-12">RAM (X₁)</TableHead>
                <TableHead className="font-medium text-muted-foreground h-12">SSD (X₂)</TableHead>
                <TableHead className="text-right font-medium text-muted-foreground h-12">Price (Y)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row) => (
                  <TableRow key={row.id} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                    <TableCell className="font-semibold text-primary py-4">{row.id.toString().padStart(2, '0')}</TableCell>
                    <TableCell className="text-foreground py-4">{row.ram} GB</TableCell>
                    <TableCell className="text-foreground py-4">{row.ssd} GB</TableCell>
                    <TableCell className="text-right font-mono text-muted-foreground py-4">₱{row.price.toLocaleString()}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t border-border/50 bg-card/40 gap-4">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredData.length === 0 ? 0 : startIndex + 1}</span> to <span className="font-medium text-foreground">{Math.min(startIndex + rowsPerPage, filteredData.length)}</span> of <span className="font-medium text-foreground">{filteredData.length}</span> entries
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Rows per page</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setPage(1);
                }}
                className="bg-background border border-border rounded-md text-sm px-2 py-1 text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
            </div>

            <div className="text-sm text-muted-foreground whitespace-nowrap">
              Page <span className="font-medium text-foreground">{page}</span> of <span className="font-medium text-foreground">{totalPages || 1}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setPage(1)}
                disabled={page === 1}
                className="p-1.5 rounded-md border border-border text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:border-border disabled:hover:text-muted-foreground transition-all"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-1.5 rounded-md border border-border text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:border-border disabled:hover:text-muted-foreground transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages || totalPages === 0}
                className="p-1.5 rounded-md border border-border text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:border-border disabled:hover:text-muted-foreground transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages || totalPages === 0}
                className="p-1.5 rounded-md border border-border text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:border-border disabled:hover:text-muted-foreground transition-all"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
