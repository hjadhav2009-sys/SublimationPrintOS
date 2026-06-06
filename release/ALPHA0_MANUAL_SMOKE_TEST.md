# Alpha 0 Manual Smoke Test

Run these checks after automated QA. Record any failures in `release/KNOWN_ISSUES_ALPHA0.md` or the release notes for the review build.

1. Launch app with `npm run tauri:dev`.
2. Confirm Dashboard loads.
3. Confirm AppData and SQLite card is ready.
4. Confirm Settings load from SQLite.
5. Edit settings, save, and reload.
6. Run Health Check foundation checks.
7. Run Advanced Health Check and confirm categories are shown.
8. Open Logs page and initialize logging.
9. Write a test log.
10. Create a diagnostic report.
11. Open logs folder.
12. Open latest diagnostic report folder.
13. Confirm Recovery card shows current session.
14. Create recovery snapshot.
15. Dismiss unclean warning if present.
16. Confirm Upscale Test shows missing engine clearly.
17. Show expected Real-ESRGAN layout.
18. Confirm Shortcuts page lists shortcuts.
19. Confirm shortcuts work outside input fields.
20. Confirm shortcuts do not trigger while typing in inputs.
21. Confirm native menu navigation works.
22. Open Offline Update page.
23. Create sample manifest.
24. Select sample update package.
25. Stage selected package.
26. Confirm no payload was copied.
27. Clear staged update.
28. Confirm managed folders open only expected AppData locations.
29. Close and relaunch app.
30. Confirm recovery clean shutdown behavior is acceptable for best-effort Phase 0.
