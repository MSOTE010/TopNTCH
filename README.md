\# topNTCH



Docker-based orchestration platform for modded Minecraft servers.



Architecture:

\- Next.js (UI)

\- Fastify (API)

\- BullMQ Worker + Redis

\- PostgreSQL

\- dockerode (Worker only)



State Machine:

CREATED → INSTALLING → READY → DEPLOYING → RUNNING → STOPPED → ERROR



