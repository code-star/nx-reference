---
name: container
description: 'Write and review Dockerfile, docker-compose, and container configuration. Covers multi-stage builds, image hardening, non-root users, minimal base images, layer optimisation, and local development compose setup. Use when asked to "containerise", "write a Dockerfile", "add docker-compose", or "harden the container image".'
license: 'MIT'
compatibility: 'Requires a skills-compatible agent with repository file access and terminal command execution when needed.'
metadata:
  owner: vstack
  maturity: stable
allowed-tools: 'execute read search edit'
argument-hint: '[service to containerise]'
user-invocable: true
disable-model-invocation: false
---

## Skill Context

This skill is part of **vstack** — a VS Code-native AI engineering workflow system.

### AskUserQuestion Format

When you need clarification, use this exact format — never invent or guess:

> **Question:** [The specific question]
> **Options:** A) … | B) … | C) …
> **Default if no response:** [What you'll do]

Never ask more than one question at a time without waiting for the answer.

### Diagram Convention

When producing hand-authored Markdown outputs, prefer Mermaid for flow,
interaction, lifecycle, state, topology, dependency, and decision diagrams when
the format is supported and improves clarity. Use ASCII as a fallback when
Mermaid is unsupported or would be less readable. Keep ASCII/text trees for
directory structures and other scan-friendly hierarchies.

# container — Dockerfile & Compose

Write production-grade container configuration for the service.

## Out of scope

- CI/CD pipeline configuration (use `cicd`)
- Kubernetes manifests (use `cicd`)
- Application code changes (engineering role)

## Step 1: Detect context

```bash
# Detect runtime
ls pyproject.toml requirements.txt package.json go.mod Cargo.toml pom.xml 2>/dev/null | head -5

# Detect existing container config
ls Dockerfile* docker-compose* .dockerignore 2>/dev/null || echo "No container config found"
```

## Step 2: Dockerfile

Write a multi-stage `Dockerfile` following these rules:

**Base image:**

- Use an official, minimal image: `python:3.12-slim`, `node:22-alpine`, `golang:1.22-alpine`, etc.
- Never use `latest` — pin to a specific version tag
- Prefer `alpine` or `slim` variants for production stage

**Multi-stage build:**

```dockerfile
# Stage 1: build / install dependencies
FROM <runtime>:<version> AS builder
WORKDIR /app
COPY <dependency files> .
RUN <install deps>

# Stage 2: production image
FROM <runtime>:<version>-slim AS runtime
WORKDIR /app
COPY --from=builder /app /app
```

**Security hardening:**

- Run as non-root user:

  ```dockerfile
  RUN addgroup --system app && adduser --system --ingroup app app
  USER app
  ```

- Drop capabilities where applicable

- No secrets in image layers — use environment variables or mounted secrets at runtime

- Set `HEALTHCHECK` instruction

**Layer optimisation:**

- Copy dependency files first, then source (cache busting only on source change)
- Combine `RUN` steps with `&&` to minimise layers
- Add `.dockerignore` excluding: `.git`, `node_modules`, `__pycache__`, `*.pyc`, `dist`, `build`, local env files

**Port and entrypoint:**

```dockerfile
EXPOSE <port>
ENTRYPOINT ["<executable>"]
CMD ["<default args>"]
```

## Step 3: docker-compose.yml (local dev)

Write `docker-compose.yml` for local development:

```yaml
services:
  app:
    build: .
    ports:
      - '<host>:<container>'
    environment:
      - <ENV_VAR>=<value>
    depends_on:
      - <dependency>
    volumes:
      - .:/app # hot-reload in dev only — remove for prod


  # Add dependencies: database, cache, broker
  # db:
  #   image: postgres:16-alpine
  # cache:
  #   image: redis:7-alpine
```

For production-like local testing, write a separate `docker-compose.prod.yml` without volume mounts.

## Step 4: Review checklist

- [ ] No `latest` tags
- [ ] Multi-stage build — production image contains no build tools
- [ ] Non-root user
- [ ] `.dockerignore` present and complete
- [ ] No secrets baked into image
- [ ] `HEALTHCHECK` defined
- [ ] Image builds successfully: `docker build -t app:local .`
- [ ] Container starts and responds: `docker run --rm -p <port>:<port> app:local`

## References

> Always use the official documentation for the Docker and Compose versions in use — Dockerfile syntax, base image tags, and Compose spec fields evolve with each release.

- [Dockerfile reference](https://docs.docker.com/reference/dockerfile/)
- [Docker Compose specification](https://docs.docker.com/compose/intro/compose-application-model/)
- [Docker official images](https://hub.docker.com/search?image_filter=official)

<!-- AUTO-GENERATED — maintained by vstack, do not edit directly -->
<!-- VSTACK-META: {"artifact_name":"container","artifact_type":"skill","artifact_version":"20260421010","generator":"vstack","vstack_version":"3.5.1"} -->
