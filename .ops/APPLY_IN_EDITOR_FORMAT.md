# Apply‑in‑Editor Compatibility (Copilot/Sonnet)

**Problem:** Some hosts default multi‑file responses to a single path (e.g., `job.md`).
**Solution:** Use explicit per‑file envelopes that most copilots recognize.

## Envelope

For each file you emit:

````

BEGIN_FILE:.<path-from-repo-root>

```<lang> filename=<path> filepath=<path>
<full content>
```

END_FILE

````

### Why this works

- The `BEGIN_FILE:` line is an easy sentinel for LLM plugins.
- `filename=`/`filepath=` inside the fence is recognized by multiple UIs (Cursor/Claude/Copilot variants).
- Using both maximizes tooling compatibility.

### Tips

- Use correct language tags: `ts`, `tsx`, `js`, `jsx`, `json`, `md`, `css`, `yaml`.
- Keep one file per envelope. No commentary between envelopes.
- Ensure folders exist; paths use forward slashes.

### Troubleshooting (common causes of `job.md`)

- ❌ Missing `BEGIN_FILE:` line → add it.
- ❌ Code fence lacks `filename=`/`filepath=` → add both.
- ❌ All envelopes reuse the same `<path>` → ensure each file has a unique path.
- ❌ Host strips outer markers → try the **Unified Diff** fallback below.

### Fallback: Unified Diff

If the host ignores envelopes, return a unified diff per file:

```diff
*** Begin Patch
*** Add File: .dev/.ops/ARCHITECTURE.md
+ <content lines>
*** End Patch
```

This is less ergonomic but still lets users apply patches with `git apply` or GUI tools.

```

```
