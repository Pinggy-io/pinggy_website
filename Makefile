PAGEFIND := npx -y pagefind@1.1.0
PAGEFIND_FLAGS := --site public --glob "docs/**/*.html"

.PHONY: help dev dev-search dev-live build index clean

help:
	@echo "Targets:"
	@echo "  dev         Hugo live-reload server (no docs search)"
	@echo "  dev-search  One-shot build + Pagefind --serve at http://localhost:1414"
	@echo "  dev-live    Hugo live reload + Pagefind --watch (two-process, run via 'make -j2 dev-live')"
	@echo "  build       Production build (Hugo + Pagefind index)"
	@echo "  index       Rebuild the Pagefind index from existing public/"
	@echo "  clean       Remove public/ and resources/"

dev:
	hugo server

dev-search:
	hugo --gc
	$(PAGEFIND) $(PAGEFIND_FLAGS) --serve

dev-live: dev-live-hugo dev-live-pagefind

dev-live-hugo:
	hugo server --renderToDisk

dev-live-pagefind:
	$(PAGEFIND) $(PAGEFIND_FLAGS) --watch

build:
	hugo --gc --minify
	$(PAGEFIND) $(PAGEFIND_FLAGS)

index:
	$(PAGEFIND) $(PAGEFIND_FLAGS)

clean:
	rm -rf public resources
