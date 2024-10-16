export function getParam(name, value) {
  if (name === "page") {
    return value ? parseInt(value) : 1;
  }

  if (name === "order") {
    return value ? value : "asc";
  }

  if (name === "filters") {
    return value ? JSON.parse(value) : {};
  }

  console.warn(`Unknown parameter: ${name}`);
}

export function filterAccounts(accounts, filters) {
  const filtersKeys = Object.keys(filters);

  if (filtersKeys.length === 0) return accounts;

  return accounts.filter((account) => {
    return filtersKeys.every((key) => account[key] === filters[key]);
  });
}

export function filterAccountsByTags(accounts, tags) {
  if (tags.length === 0) return accounts;

  return accounts.filter((account) => {
    if (account.tags.length === 0) return false;

    const accountTags = account.tags.map((tag) => tag.name);

    return tags.some((tag) => accountTags.includes(tag));
  });
}

export function sortAccounts(accounts, sortField, sortOrder) {
  return accounts.toSorted((a, b) => {
    if (sortOrder === "asc") {
      return a[sortField] > b[sortField] ? 1 : -1;
    }

    return a[sortField] < b[sortField] ? 1 : -1;
  });
}

export function sortAccountsByBranchesLocation(accounts) {
  return accounts
    .filter((account) => account.branches.length > 0)
    .map((account) => {
      const sortedBranches = account.branches.toSorted(
        (a, b) => a.location - b.location
      );

      return {
        ...account,
        branches: sortedBranches,
      };
    })
    .toSorted((a, b) => {
      const locationA = a.branches[0]?.location;
      const locationB = b.branches[0]?.location;

      return locationA - locationB;
    });
}

export function calculateMaxDiscounts(accounts) {
  return accounts.map((account) => {
    const maxDiscounts = {
      black: 0,
      classic: 0,
      premium: 0,
    };

    account.benefits.forEach((benefit) => {
      benefit.program_name.forEach((program) => {
        const discount = parseFloat(benefit.type.replace("%", ""));

        if (program.includes("Black") && discount > maxDiscounts.black) {
          maxDiscounts.black = discount;
        } else if (
          program.includes("Classic") &&
          discount > maxDiscounts.classic
        ) {
          maxDiscounts.classic = discount;
        } else if (
          program.includes("Premium") &&
          discount > maxDiscounts.premium
        ) {
          maxDiscounts.premium = discount;
        }
      });
    });

    return {
      ...account,
      maxDiscounts,
    };
  });
}

export function paginateAccounts(accounts, page, limit = 4) {
  const start = (page - 1) * limit;
  const end = start + limit;

  return accounts.slice(start, end);
}
