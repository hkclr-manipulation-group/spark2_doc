# Spark2 Documentation

Static bilingual documentation for Spark2 users and SDK developers. Open [the home page](index.html) directly or serve the repository root with a static HTTP server. GitHub Pages can serve the site without a build step.

## Document versions

- [Spark2 hardware user manual](downloads/Sparkt2_User_Manual.pdf) is V1.1 (2026-11-09). The site links directly to the installation and dimensional drawing pages.
- [Robot SDK 1.5.0 C++](docs/robot-sdk-cpp.html) and [Python](docs/robot-sdk-python.html) are based on the matching `docs/` files in both 2026-11-04 release archives. They use the `Robot` class. The quick start lists the CPython wheels actually included in each archive. The full user guide and runnable examples ship inside each archive.
- The [C++](docs/cpp-api.html) and [Python](docs/python-api.html) references for the `Spark2` class retain their existing URLs. The V1.2 PDF manuals and Markdown references are linked from the same section.
- The [URDF archive](downloads/spark2_urdf.zip) includes models with and without a gripper. The model path required for Robot SDK 1.5.0 offline kinematics is specified separately in the quick start.
- The linked Windows Robot Client 1.1.0 ZIP was repacked from the supplied bundle without its `logs/` directory. The original archive stays local.

When replacing an SDK release, update the quick start, rendered references, API search entries in `app.js`, and versioned download URLs together.
