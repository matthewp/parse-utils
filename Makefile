COMPILE=node_modules/.bin/compile

mod.js: src/main.js
	$(COMPILE) -f es -o $@ $^

clean:
	@rm mod.js
.PHONY: clean